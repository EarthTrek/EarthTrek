/**
 * @class EarthTrekLayersView
 * @module EarthTrek
 * @author SATrek
 * @author Alejandro Sanchez <alejandro.sanchez.trek@gmail.com>
 * @description EarthTrek - NASA Space Apps 2017 - 07 JUN 2017.
 */

var earthTrekLayer = require('./earthtrek-layer');

'use strict';

/**
 *
 * @param viewer
 * @constructor
 */
function EarthTrekLayersView(viewer) {
    this.viewer = viewer;
}
/**
 * Render Layers
 */
EarthTrekLayersView.prototype.render = function () {
    var layers = earthTrekLayer.getLayers();
    layers
}