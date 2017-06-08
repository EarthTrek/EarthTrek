/**
 * @class EarthTrekLayersView
 * @module EarthTrek
 * @author SATrek
 * @author Alejandro Sanchez <alejandro.sanchez.trek@gmail.com>
 * @description EarthTrek - NASA Space Apps 2017 - 07 JUN 2017.
 */

var earthTrekLayer = require('../earthtrek-layer');

require('../../css/layers-view.css');
'use strict';

/**
 *
 * @param viewer
 * @constructor
 */
function EarthTrekLayersView(viewer, options) {
    this.viewer = viewer;
    this.container = $(options.containerId);
}
/**
 * Render Layers
 */
EarthTrekLayersView.prototype.render = function (layer) {
    var that = this;
    this.container.empty();
    var layers = earthTrekLayer.getLayers();
    for (var i = 0; i <= layers.length - 1; i++) {
        var layerContainer = document.createElement('div');
        var imageryLayer = layers.get(i);
        $(layerContainer).append(imageryLayer._imageryProvider._layer);

        var hideButton = document.createElement('button');
        $(hideButton).html('Remove');
        $(hideButton).data('layer-id', imageryLayer._imageryProvider._layer);
        $(hideButton).click(function () {
            earthTrekLayer.removeLayer({id: $(this).data('layer-id')});
            that.render(imageryLayer);
        });
        $(layerContainer).append(hideButton);
        this.container.append(layerContainer);
    }

    this.container.show();
}

module.exports = EarthTrekLayersView;