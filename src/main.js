import { isHaiku } from "./haiku";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function() {
	$("#haiku-form").submit(function(event) {
		event.preventDefault();

		let line1 = $("#line1").val();
		let line2 = $("#line2").val();
		let line3 = $("#line3").val();
		let solutionBool = isHaiku(line1, line2, line3);
		console.log(line1);
		console.log(line2);
		console.log(line3);
		console.log(solutionBool);

		if (solutionBool === true) {
			$("#solution").html(`<p>Huzzah my dear friend,</p>
        <p>you meld words like a warrior,</p>
        <p>soul of a poet</p>`);
		} else {
			$("#solution").html(`<p>I'm sorry my friend,</p>
        <p>your words although do flow great,</p>
        <p>no Haiku they make</p>`);
		}

		$("#clearInput").on("click", function() {
			$("#line1").val("");
			$("#line2").val("");
			$("#line3").val("");
		});
	});
});
