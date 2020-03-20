/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();

		if (coords != undefined)
            this.updateTexCoords(coords);
	}
	initBuffers() {
		this.vertices = [
            -2, 0, 0,
            2, 0, 0,
            0, 2, 0,
            -2, 0, 0,
            2, 0, 0,
            0, 2, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            2, 0, 1,
            4, 3, 5
		];

		this.normals = [];

		for (let i = 0; i < 3; ++i) // 4: number of vertices
			this.normals.push(0, 0, 1);

		for (let i = 0; i < 3; ++i)
			this.normals.push(0, 0, -1);

		this.texCoords = [
			0, 0,
			0.5, 0.5,
			1, 0,
			0, 0,
			0.5, 0.5,
			1, 0
		];
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	/**
	* @method updateTexCoords
	* Updates the list of texture coordinates of the quad
	* @param {Array} coords - Array of texture coordinates
	*/
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

