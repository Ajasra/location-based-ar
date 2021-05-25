AFRAME.registerComponent('peakfinder', {
    init: function() {
        alert('Peakfinder component initialising!');
        const distanceMsg = document.querySelector('[gps-projected-entity-place]').getAttribute('distanceMsg');
        alert(distanceMsg);   // "890 meters"
    }
});