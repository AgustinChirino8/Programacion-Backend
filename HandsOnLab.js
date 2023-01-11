class TicketManager {
  #precioBaseDeGanancia = 0.25; // se coloca un # para declarar una propiedad privada
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }

  agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
  }

  agregarUsuarios(idEvento, idUsuario) {
    const evento = this.#evaluarEvento(idEvento)
    if (evento) {
      if (evento.participantes.includes(idUsuario)) {
        console.log("el participante ya esta incluido en este evento")
      } else {
        evento.participantes.push(idUsuario)
        console.log("participante añadido")
      }
    } else {
      console.log("el evento no existe")
    }
  }
  
  ponerEventoEnGira(idEvento , nuevoLugar , nuevaFecha){
    const evento = this.#evaluarEvento(idEvento)
    if (evento){
        const newEvento ={
            ...evento,
            id:this.#generarId(),
            lugar:nuevoLugar,
            fecha:nuevaFecha,
            participantes:[]
        }
        this.eventos.push(newEvento)
    }else{
        console.log('evento inexistente')
    }
  }

  #generarId() {
    let id = 1;
    if (this.eventos.length !== 0) {
      id = this.eventos[this.eventos.length - 1].id + 1;
    }
    return id;
  }
  #evaluarEvento(idEvento) {
    return this.eventos.find((evento) => evento.id === idEvento);
  }
}

const ticketManager1 = new TicketManager();
const ticketManager2 = new TicketManager();
ticketManager1.agregarEventos("Evento1", "Lugar3", 60, 100);
ticketManager1.agregarEventos("Evento2", "Lugar1", 100, 100);
ticketManager1.agregarEventos("Evento3", "Lugar5", 85, 100);


// ticketManager1.agregarUsuarios(3, 1);
// ticketManager1.agregarUsuarios(1, 2);
// ticketManager1.agregarUsuarios(4, 3);

ticketManager1.agregarUsuarios(2, 1);
ticketManager1.ponerEventoEnGira(1,'nuevolugar1' , new Date('10/02/2023'))
ticketManager1.ponerEventoEnGira(2,'nuevolugar2' , new Date('10/05/2023'))


console.log(ticketManager1.getEventos())
