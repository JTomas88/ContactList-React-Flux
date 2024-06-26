// Componente principal, donde serán llamados Demo "lista contactos" y single "crear contacto"

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Demo } from "./Demo";

export const Home = () => (
	<div className="text-center mt-5">
		<Demo />
	</div>
);
