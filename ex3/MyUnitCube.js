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
            0.5, 0.5, 0.5       // 24

		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 3, 9,
            1, 4, 10,
            2, 5, 11,
            0, 9, 6,
            1, 10, 7,
            2, 11, 8,

            12, 15, 3,
            13, 16, 4,
            14, 17, 5,
            12, 3, 0,
            13, 4, 1,
            14, 5, 2,

            21, 9, 3,
            22, 10, 4,
            23, 11, 5,
            21, 3, 15,
            22, 4, 16,
            23, 5, 17,

            18, 12, 0,
            19, 13, 1,
            20, 14, 2,
            18, 0, 6,
            19, 1, 7,
            20, 2, 8,

            15, 12, 18,
            16, 13, 19,
            17, 14, 20,
            15, 18, 21,
            16, 19, 22,
            17, 20, 23,

            18, 6, 9,
            19, 7, 10,
            20, 8, 11,
            18, 9, 21,
            19, 10, 22,
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
            1, 0, 0,
            0, 0, -1,

            0, -1, 0,
            -1, 0, 0,
            0, 0, 1,

            0, -1, 0,
            1, 0, 0,
            0, 0, 1,

            0, 1, 0,
            -1, 0, 0,
            0, 0, -1,

            0, 1, 0,
            1, 0, 0,
            0, 0, -1,

            0, 1, 0,
            -1, 0, 0,
            0, 0, 1,

            0, 1, 0,
            1, 0, 0,
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

