import { isHaiku } from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();

    let line1 = $('#line1').val();
    let line2 = $('#line2').val();
    let line3 = $('#line3').val();
    let solutionBool = isHaiku(line1, line2, line3);

    if (solutionBool === true) {
      $('#solution').text(`Huzzah my dear friend
        you meld words like a warrior
        soul of a poet`);
      } else {
        $('#solution').text(`I'm sorry my friend,
        your words although great,
        no Haiku they make`);
      }
    });
  });
