/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
        super(scene);

        this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -0.5, -0.5, -0.5,   // 0
            -0.5, -0.5, -0.5,   // 1
            -0.5, -0.5, -0.5,   // 2

            0.5, -0.5, -0.5,    // 3
            0.5, -0.5, -0.5,    // 4
            0.5, -0.5, -0.5,    // 5

            -0.5, -0.5, 0.5,    // 6
            -0.5, -0.5, 0.5,    // 7
            -0.5, -0.5, 0.5,    // 8

            0.5, -0.5, 0.5,     // 9
            0.5, -0.5, 0.5,     // 10
            0.5, -0.5, 0.5,     // 11

            -0.5, 0.5, -0.5,    // 12
            -0.5, 0.5, -0.5,    // 13
            -0.5, 0.5, -0.5,    // 14

            0.5, 0.5, -0.5,     // 15
            0.5, 0.5, -0.5,     // 16
            0.5, 0.5, -0.5,     // 17

            -0.5, 0.5, 0.5,     // 18
            -0.5, 0.5, 0.5,     // 19
            -0.5, 0.5, 0.5,     // 20

            0.5, 0.5, 0.5,      // 21
            0.5, 0.5, 0.5,      // 22
            0.5, 0.5, 0.5       // 23

		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 3, 9, // baixo
            0, 9, 6,

            18, 12, 1, // equerda
            18, 1, 7,

            13, 15, 4, // atras
            13, 4, 2,

            5, 16, 21, // direita
            5, 21, 10,

            14, 19, 22, // cima
            14, 22, 17,

            20, 8, 11, // frente
            20, 11, 23
        ];

        // Generating normals
        /*
        As this plane is being drawn on the xy plane, the normal to the plane will be along the positive z axis.
        So all the vertices will have the same normal, (0, 0, 1).
        */
        this.normals = [
            0, -1, 0,
            -1, 0, 0,
            0, 0, -1,

            0, -1, 0,
            0, 0, -1,
            1, 0, 0,

            0, -1, 0,
            -1, 0, 0,
            0, 0, 1,

            0, -1, 0,
            1, 0, 0,
            0, 0, 1,

            -1, 0, 0,
            0, 0, -1,
            0, 1, 0,

            0, 0, -1,
            1, 0, 0,
            0, 1, 0,

            -1, 0, 0,
            0, 1, 0,
            0, 0, 1,

            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

