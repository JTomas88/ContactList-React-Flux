// Componente lista de contactos

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const contactos = store.listaContactos?.contacts;
	console.log('lista de contactos: ', contactos);

	if (contactos && contactos.length > 0) {
		return (
			<div className="container">

				<ul className="list-group">
					{contactos.map((item, index) => (
						<li key={index} className="list-group-item row filas">
							<div className="col-6 espacioFoto">
								
							</div>
							<div className="col-6 espacioDatos">
								<p><h5>  {item.name}  </h5></p>
								<p className="datoAddressl"><i className="material-icons">&#xe0c8;</i>  {item.address}</p>
								<p className="datoTelephone"> <i class="fa-solid fa-phone"></i>  {item.phone}</p>
								<p className="datoEmail"> <i className="material-icons">&#xe0be;</i>  {item.email}</p>
							</div>
						</li>
					))}
				</ul>
				<br />
			</div>
		);
	} else {
		return (
			<div className="container">
				<p>No hay contactos para mostrar.</p>
			</div>
		);
	}
}


<Link to="/">
	<button className="btn btn-primary">Back home</button>
</Link>

