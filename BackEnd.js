class usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
  
    getFullName() {
      return `Nombre Completo ${this.nombre} ${this.apellido}`;
    }
  
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBook(nombre,autor) {
      this.libros.push({nombre,autor});
    }
  
    getBookNames() {
      return this.libros;
    }
  }
  
  let usr = new usuario(
    "jacobo",
    "ritondo",
    [
      { nombre: "el señor de los anillos", autor: `Tolkien` },
      { nombre: "Don Quijote de la Mancha ", autor: `Miguel Cervantes` },
      { nombre: "La Metamorfosis", autor: `Ovidio` },
    ],
    ["Chori","Negroni"]
  );
  
  console.log(usr.getFullName());
  console.log(usr.countMascotas())
  usr.addMascota("pepita");
  usr.addBook("Odisea","Homero");
  console.log(usr.getBookNames());
  console.log(usr.countMascotas());