/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Diamond element in GUI
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');

        //Triangle element in GUI
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');

        //Parallelogram in GUI
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');
        
        //Small Triangle in GUI
        this.gui.add(this.scene, 'displayTriangleSmall').name('Small Triangle');

        //Big Triangle in GUI
        this.gui.add(this.scene, 'displayTriangleBig').name('Big Triangle');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}