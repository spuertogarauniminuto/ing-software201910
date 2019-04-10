# Hotel

El dueño de un hotel le pide a usted desarrollar un programa para consultar sobre las habita- ciones disponibles y reservar habitaciones de su hotel.

El hotel posee tres tipos de habitaciones: simple, doble y matrimonial, y dos tipos de clientes: habituales y esporádicos. Una reserva viene determinada por los datos del cliente, los datos de la habitación, la fecha de entrada y el número de días que estará ocupada la habitación.

El recepcionista del hotel debe poder hacer las siguientes operaciones:
1. Obtener un listado de las habitaciones disponibles de acuerdo a su tipo
2.  Preguntar por el precio de una habitación de acuerdo a su tipo
3. Preguntar por el descuento ofrecido a los clientes habituales
4. Preguntar por el precio total para un cliente dado, especificando su número de identi- ficación, el tipo de habitación y el número de noches.
5. Dibujar en pantalla la foto de una habitación de acuerdo a su tipo
6. Reservar una habitación especificando el número de habitación, el nombre de cliente y su número de identificación.
7. Eliminar una reserva especificando el número de la habitación
8. Información de las Huspedes de cada uno de las habitaciones ocupadas
9. Listado de las salidas de cada uno de los Dias
10. Listar las habitaciones ocupadas en el hotel por piso y tipo 


**Por otro lado, el administrador podrá usar el programa realizado para:**

11. Cambiar el precio de una habitación de acuerdo a su tipo
12. Cambiar el valor del descuento ofrecido a los clientes habituales
13. Calcular las ganancias que tendrán en un mes especificado (considérese que todos los meses tienen treinta días)
14. Calcular el porcentaje de ocupación de una Habitación
15. Calcular el consumo acumulado de una habitación.
16. Listar los huéspedes por habitación y piso


El hotel posee información sobre los clientes que son habituales. Esta estructura puede mane- jarla con un diccionario, cuya clave sea el número de identificación y como significado tenga los datos personales del cliente.

El diseño a desarrollar debe facilitar la extensibilidad de nuevos tipos de habitaciones, clientes y a su vez permitir agregar nuevas consultas.

Previamente  a  la  realización  del  diagrama  de  clases,  se  pide  la  elaboración  del  diagrama  de casos de uso correspondiente al sistema descrito suponiendo que un cliente puede realizar la reserva de su habitación a través del programa solicitado.