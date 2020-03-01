/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.face = new MyQuad(this.scene);
    }
    display() {
        this.scene.setDiffuse(1, 1, 1, 1);

        // 1. Bottom face
        this.face.display();

        // 2. Right face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.face.display();
        this.scene.popMatrix();

        // 3. Top face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.face.display();
        this.scene.popMatrix();

        // 4. Left face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 3 / 2, 0, 0, 1);
        this.face.display();
        this.scene.popMatrix();

        // 5. Back face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();

        // 6. Front face
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 3 / 2, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();
    }
}

