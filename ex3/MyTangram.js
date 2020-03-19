/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene, material) {
		super(scene);
        this.initBuffers();

        this.diamondMaterial = material;
	}
	initBuffers() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmallPurple = new MyTriangleSmall(this.scene);
        this.triangleBigOrange = new MyTriangleBig(this.scene);
        this.triangleBigBlue = new MyTriangleBig(this.scene);
        this.triangleSmallRed = new MyTriangleSmall(this.scene);

        this.material = new CGFappearance(this.scene);
        this.material.setSpecular(1, 1, 1, 1.0);
        this.material.setShininess(10.0);
    }
    display() {
        this.scene.pushMatrix();

        // 1. Diamond Transformation
        var diamondTranslation = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -1, 0, 0, 1
        ];

        this.scene.multMatrix(diamondTranslation);

        this.diamondMaterial.apply();

        this.diamond.display();
        this.scene.popMatrix();

        // 2. Parallelogram Transformation
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);

        this.material.setAmbient(0.5, 0.5, 0, 1.0);
        this.material.setDiffuse(255/255, 255/255, 0, 1);
        this.material.apply();

        this.parallelogram.display();
        this.scene.popMatrix();

        // 3. Small Triangle (1) Transformation
        this.scene.pushMatrix();
        this.scene.translate(-2, 3, 0);
        this.scene.scale(1, -1, 1);

        this.material.setAmbient(75/255, 40/255, 95/255, 1.0);
        this.material.setDiffuse(150/255, 80/255, 190/255, 1.0);
        this.material.apply();

        this.triangleSmallPurple.display();
        this.scene.translate(100, 100, 100);
        this.scene.popMatrix();

        // 4. Big Triangle (1) Transformation
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);

        this.material.setAmbient(0.5, 72/255, 0, 1.0);
        this.material.setDiffuse(1, 155/255, 0, 1.0);
        this.material.apply();

        this.triangleBigOrange.display();
        this.scene.popMatrix();

        // 4. Big Triangle (2) Transformation
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(8) - 1, -Math.sqrt(8) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);

        this.material.setAmbient(0.5, 72/255, 0.5, 1.0);
        this.material.setDiffuse(0, 155/255, 1, 1.0);
        this.material.apply();

        this.triangleBigBlue.display();
        this.scene.popMatrix();

        // 5. Triangle Transformation
        this.scene.pushMatrix();
        var diff1 = Math.sqrt((3 - 2 * Math.sqrt(2)) / 4);
        this.scene.translate(diff1, -Math.sqrt(2) + diff1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);

        this.material.setAmbient(0.5, 72/255, 103/255, 1.0);
        this.material.setDiffuse(1, 155/255, 207/255, 1.0);
        this.material.apply();

        this.triangle.display();
        this.scene.popMatrix();

        // 6. Small Triangle (2) Transformation
        this.scene.pushMatrix();
        var diff2 = Math.sqrt(2);
        this.scene.translate(diff1, -diff2 + diff1, 0)
        this.scene.rotate(Math.PI * 3 /4, 0, 0, 1);
        this.scene.translate(0, -1, 0);

        this.material.setAmbient(0.5, 13/255, 13/255, 1.0);
        this.material.setDiffuse(1, 27/255, 27/255, 1.0);
        this.material.apply();

        this.triangleSmallRed.display();
        this.scene.popMatrix();
    }

    updateBuffers() {
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmallPurple.enableNormalViz();
        this.triangleBigOrange.enableNormalViz();
        this.triangleBigBlue.enableNormalViz();
        this.triangleSmallRed.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmallPurple.disableNormalViz();
        this.triangleBigOrange.disableNormalViz();
        this.triangleBigBlue.disableNormalViz();
        this.triangleSmallRed.disableNormalViz();
    }
}

