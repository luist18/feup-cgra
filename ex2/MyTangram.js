/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmallPurple = new MyTriangleSmall(this.scene);
        this.triangleBigOrange = new MyTriangleBig(this.scene);
        this.triangleBigBlue = new MyTriangleBig(this.scene);
        this.triangleSmallRed = new MyTriangleSmall(this.scene);
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
        this.scene.setDiffuse(0, 255/255, 0, 1);

        this.diamond.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 2. Parallelogram Transformation
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.scene.setDiffuse(255/255, 255/255, 0, 1);

        this.parallelogram.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 3. Small Triangle (1) Transformation
        this.scene.translate(-2, 3, 0);
        this.scene.scale(1, -1, 1);
        this.scene.setDiffuse(150/255, 80/255, 190/255, 1);

        this.triangleSmallPurple.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 4. Big Triangle (1) Transformation
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.scene.setDiffuse(255/255, 155/255, 0, 1);

        this.triangleBigOrange.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 4. Big Triangle (2) Transformation
        this.scene.translate(-Math.sqrt(8) - 1, -Math.sqrt(8) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.scene.setDiffuse(0, 155/255, 255/255, 1);

        this.triangleBigBlue.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 5. Triangle Transformation
        var diff1 = Math.sqrt((3 - 2 * Math.sqrt(2)) / 4);
        this.scene.translate(diff1, -Math.sqrt(2) + diff1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.setDiffuse(255/255, 150/255, 205/255, 1);

        this.triangle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // 6. Small Triangle (2) Transformation
        var diff2 = Math.sqrt(2);
        this.scene.translate(diff1, -diff2 + diff1, 0)
        this.scene.rotate(Math.PI * 3 /4, 0, 0, 1);
        this.scene.translate(0, -1, 0);
        this.scene.setDiffuse(255/255, 25/255, 30/255, 1);

        this.triangleSmallRed.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}

