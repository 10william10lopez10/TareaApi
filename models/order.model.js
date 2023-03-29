class Order {
    constructor(id, user, items, total, address, date) {
      this.id = id; // identificador único de la orden
      this.user = user; // usuario que realizó la orden
      this.items = items; // lista de productos en la orden
      this.total = total; // total de la orden
      this.address = address; // dirección de entrega de la orden
      this.date = date; // fecha de la orden
    }
  }