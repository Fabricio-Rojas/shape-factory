'use strict';

// Declaring Elements



// Class Definition

class Shape {
    #name;
    #color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    };

    set name(name) {
        this.#name = name;
    };

    set color(color) {
        this.#color = color;
    };

    get name() {
        return this.#name;
    };

    get color() {
        return this.#color
    };

    getInfo() {
        return `${this.#name} ${this.#color}`
    };
};

// Main function
