const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			miUsuario: "tom",

			camposDelContacto: {
				name: "",
				phone: "",
				email: "",
				address: ""
			},

			listaContactos: {},

		},

		actions: {

			/**
			 * llamamos al servicio para obtener la agenda dentro de una función
			 * @param {slug}  recibe el nombre del usuario. 
			 * @returns la lista de contacto que tenga mi usuario (slug) asignada. 
			 */
			obtenerListaContactos: (slug) => {
				console.log(slug);
				return fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {

					method: 'GET',
				}).then(respuesta => {
					if (!respuesta.ok) {
						throw new Error('No fue ok ' + respuesta.statusText)
					}
					return respuesta.json()

				}).then(datosRespuesta => {
					console.log('respuesta del servicio: ', datosRespuesta);
					setStore({ listaContactos: datosRespuesta });
					return datosRespuesta;
				})
					.catch(esError => {  //catch captura el error del if si fueserroneo, no es obligatorio pero si buena práctica
						console.log('Error: ' + esError);
					})
			},

			crearContactoNuevo


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
