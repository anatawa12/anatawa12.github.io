// constants
const addItem = document.getElementById("add-item");

const result = document.getElementById("result")

const circle = document.getElementById("circle");
const startStop = document.getElementById("start-stop");
const startStopLabel = document.getElementById("start-stop-label");

/** @type {HTMLDivElement} */
const itemConfigDialogWrapper = document.getElementById("item-config-dialog-wrapper");
/** @type {HTMLDivElement} */
const itemConfigDialog = document.getElementById("item-config-dialog");
/** @type {HTMLButtonElement} */
const deleteItem = document.getElementById("delete-item");
/** @type {SVGSVGElement} */
const closeItemConfig = document.getElementById("close-item-config");
/** @type {HTMLInputElement} */
const itemName = document.getElementById("item-name");
/** @type {HTMLInputElement} */
const itemColor = document.getElementById("item-color");
/** @type {HTMLInputElement} */
const itemRate = document.getElementById("item-rate");

const onDownName = document.ontouchstart ? "ontouchstart" : "onmousedown";

const colors = [
    "#FFD700",
    "#FFA500",
    "#ff0000",
    "#FF69B4",
    "#8A2BE2",
];
const radius = 150;

/**
 * @property {SVGGElement} gTag
 * @property {SVGPathElement} pathTag
 * @property {SVGTextElement} textTag
 */
class RouletteElement {
    /**
     * @param ctrl {RouletteController}
     * @param name {string}
     * @param color {string}
     * @param rate {number}
     */
    constructor(ctrl, name, color, rate) {
        this.ctrl = ctrl;
        this.name = name;
        this.color = color;
        this.rate = rate;
    }

    openSettings() {
        deleteItem.disabled = this.ctrl.elements.length <= 2;
        deleteItem.onclick = () => {
            const i = this.ctrl.elements.indexOf(this);
            this.ctrl.elements.splice(i, 1);
            itemConfigDialogWrapper.hidden = true;
            this.ctrl.drawCircle();
            this.gTag.remove()
        }
        closeItemConfig.onclick = () => {
            this.name = itemName.value;
            this.color = itemColor.value;
            this.rate = Number(itemRate.value);
            itemConfigDialogWrapper.hidden = true;
            this.ctrl.drawCircle();
        };
        itemName.value = this.name;
        itemColor.value = this.color;
        itemRate.value = `${this.rate}`;
        itemConfigDialogWrapper.hidden = false;
    }
}

/**
 * @property {RouletteElement[]} elements
 * @property {SVGElement} circle
 */
class RouletteController {
    /**
     * @param circle {SVGElement}
     */
    constructor(circle) {
        this.elements = [new RouletteElement(this, "0", colors[Math.floor(Math.random() * colors.length)], 0)];
        this.circle = circle;
        this.addElement();
    }

    /**
     * @private
     */
    computeNextColor() {
        const counts = [];
        for (let i = -1; i < colors.length; i++) {
            counts[i] = 0;
        }

        for (let element of this.elements) {
            counts[colors.indexOf(element.color)]++;
        }

        /** @type {string[][]} */
        let colorsByCount = [];
        for (let i = 0; i < counts.length; i++) {
            const count = counts[i];
            while (colorsByCount.length - 1 < count) colorsByCount.push([]);
            colorsByCount[count].push(colors[i]);
        }
        const excludes = [this.elements[0].color, this.elements[this.elements.length - 1].color];

        let arrival = colors.filter(color => !excludes.includes(color));
        for (let colors of colorsByCount) {
            if (colors.every(color => excludes.includes(color))) continue;
            arrival = colors.filter(color => !excludes.includes(color));
            break;
        }

        return arrival[Math.floor(Math.random() * arrival.length)];
    }

    addElement() {
        this.elements.push(new RouletteElement(
            this,
            `${this.elements.length}`,
            this.computeNextColor(),
            0,
        ));
    }

    prevDeg = 0;

    drawCircle(initialDeg = this.prevDeg) {
        this.prevDeg = initialDeg;
        const radPerElement = Math.PI * 2 / this.elements.length;
        const degPerElement = 360 / this.elements.length;

        const sx = Math.cos(-radPerElement / 2) * radius;
        const sy = Math.sin(-radPerElement / 2) * radius;
        const ex = Math.cos(+radPerElement / 2) * radius;
        const ey = Math.sin(+radPerElement / 2) * radius;

        //this.circle.innerHTML = '';
        for (let i = 0; i < this.elements.length; i++) {
            /** @type {RouletteElement} */
            const element = this.elements[i];
            const deg = i * degPerElement + initialDeg;

            /** @type {SVGGElement} */
            let g;
            /** @type {SVGPathElement} */
            let path;
            /** @type {SVGTextElement} */
            let text;

            if (element.gTag) {
                g = element.gTag;
                path = element.pathTag;
                text = element.textTag;
            } else {
                g = document.createElementNS("http://www.w3.org/2000/svg", "g");

                path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.onclick = () => element.openSettings();
                g.appendChild(path);

                text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("text-anchor", "middle");
                text.setAttribute("alignment-baseline", "middle");
                text.setAttribute("fill", `#fff`);
                text.style.pointerEvents = "none";
                g.appendChild(text);

                this.circle.appendChild(g);
            }
            const gTransform = `rotate(${deg})`;
            const pathD = `M 0,0 L ${sx},${sy} A 150 150 0 0 1 ${ex},${ey} z`;
            const pathFill = element.color;
            const textTransform = `translate(112.5, 0) rotate(${-deg})`;
            const textContent = element.name;

            g.setAttribute("transform", gTransform)
            path.setAttribute("d", pathD);
            path.setAttribute("fill", pathFill);
            text.setAttribute("transform", textTransform);
            text.textContent = textContent;

            element.gTag = g;
            element.pathTag = path;
            element.textTag = text;
        }

        let index = -Math.floor((initialDeg + 90) / degPerElement + 0.5);
        if (index < 0) index = this.elements.length + (index % this.elements.length);
        const value = this.elements[index % this.elements.length];
        result.textContent = value.name;
        //this.circle.innerHTML = svg;
    }

    /**
     * @return {function():void} stop
     */
    normalRotate() {
        let run = true;
        const animation = () => {
            if (!run) return
            this.drawCircle(Date.now() * 2 % 360);
            requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
        return () => { run = false; };
    }

    /**
     * @param offset {number}
     * @return {Promise<void>}
     */
    stopAnimation(offset) {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const animation = () => {
                const t = (Date.now() - startTime) / 500;
                const rotate = (t-t * t/6) * 1000 % 360 - offset - 150;
                this.drawCircle(rotate);
                //circle.setAttribute("transform", `rotate(${rotate})`);
                if (t < 3.0)
                    requestAnimationFrame(animation);
                else resolve()
            };
            requestAnimationFrame(animation);
        })
    }

    /**
     * @private
     * @return {number[]}
     */
    calcRateEdges() {
        const rates = this.elements.map(element => element.rate);
        const sum = rates.reduce((a, c) => a + c);
        if (sum === 0) {
            const perElement = 1 / rates.length;
            return rates.map((_, i) => (i + 1) * perElement)
        } else {
            const edges = new Array(rates.length);
            let edgeSum = 0;
            for (let i = 0; i < rates.length; i++) {
                edgeSum += rates[i]/sum;
                edges[i] = edgeSum;
            }
            return edges;
        }
    }

    /**
     * @return {[RouletteElement, number]}
     */
    calcRate() {
        const edges = this.calcRateEdges()
        const randV = Math.random();
        let start = 0;
        for (let i = 0; i < edges.length; i++) {
            if (randV　< edges[i]) {
                const edgeSize = edges[i] - start;
                const rateInEdge = (randV - start) / edgeSize;
                const degree = (i +　rateInEdge) * (360 / this.elements.length);
                return [this.elements[i], degree];
            }
            start = edges[i]
        }
        return [this.elements[this.elements.length - 1], 360];
    }

    /**
     *
     * @param stopPromise {Promise<any>}
     * @return {Promise<void>}
     */
    async startRoulette(stopPromise) {
        const stop = this.normalRotate();
        await stopPromise;
        stop();
        let [value, deg] = this.calcRate();
        deg -= 180 / this.elements.length;
        await this.stopAnimation(deg);
        result.textContent = value.name;
    };
}

// main
/**
 * @return {Promise<void>}
 */
function waitStopButton() {
    return new Promise((resolve) => {
        startStopLabel.textContent = "STOP"
        startStop[onDownName] = () =>　{
            startStop[onDownName] = null;
            resolve();
        }
    });
}

const ctor = new RouletteController(circle);
ctor.drawCircle();

startStop.onclick = async (e) =>　{
    const click = startStop.onclick;
    try {
        startStop.onclick = null;
        await ctor.startRoulette(waitStopButton());
    } catch (e) {
        console.error(e.message);
    } finally {
        startStop.onclick = click;
        startStopLabel.textContent = "START"
    }
}

addItem.onclick = async (e) => {
    ctor.addElement();
    ctor.drawCircle();
}
