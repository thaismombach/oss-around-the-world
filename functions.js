/*
    Util functions and info
*/

var code_to_name = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
  };

var div_height, div_width;

function createPageBasics(i) { 
  var dvMain = document.getElementById('main_div'+i);
  var dvElements = '<h1 id="page_header'+i+'"></h1><p id="page_explanation'+i+'"></p>'; 
  dvElements += '<select id="top20_countries'+i+'" style="display:none"></select><button id="confirm_button'+i+'" style="display:none">Generate Charts</button>';
  dvElements += '<div id="chart_div'+i+'" style="width: 100%; height: 80%;"></div>';
  // dvElements += '<form method="get" id ="download_file"><button id="download_button" type="submit" style="display:none">Download</button></form>';
  dvElements += '<div id="table_div'+i+'"></div>';
  dvMain.innerHTML = dvElements; 

}
function createDataTable(arrayData, div_i) {
  var table = "<table class='table table-striped' id='table_data"+div_i+"'><thread><tr>"; 
  var i; 
  for(i=0;i<arrayData.length;i++){
   table+= "<th onclick='sortTable(" + i + "," + div_i + ")'>";
   table+= arrayData[i];
   table+= "</th>";
  }
  table += "</tr></thread><tbody id='table_body"+div_i+"'>"; 
  table+= "</tbody></table>";
  var dvTable = document.getElementById('table_div'+div_i);
  dvTable.innerHTML = table;
}

function insertDataOnTable(arrayData, div_i) { 
  var table_body = document.getElementById('table_body'+div_i);
  // console.log(table_body);
  for (i=0; i<arrayData.length; i++){
      var tr = document.createElement('tr');   
      for(j=0;j<arrayData[i].length;j++){
        var td = document.createElement('td');
        var text = document.createTextNode(arrayData[i][j]);

        td.appendChild(text);
        tr.appendChild(td);
      }
      table_body.appendChild(tr);
  }
}

function sortTable(n, div_i) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table_data"+div_i);
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if(isNaN(x.innerHTML) || isNaN(y.innerHTML)) { 
        x = x.innerHTML.toLowerCase(); 
        y = y.innerHTML.toLowerCase();
      } 
      else { 
        x = Number(x.innerHTML); 
        y = Number(y.innerHTML);
      }
      if (dir == "asc") {
        if (x > y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

/*
    Function to draw chart to show the number of project per country
*/
function projectsChart(div_i) { 

  // document.getElementById('download_file').action = "projects_per_country.csv"; 

  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var arrayData = []; 
    $.ajax({
       type: "GET",  
       url: "data/projects_per_country_code.csv",
       dataType: "text",       
       success: function(response)  
       {
          arrayData = $.csv.toArrays(response); 
          var i, new_end = 0, headers; 
          var dataTable = []; 
          dataTable[0] = arrayData[0];
          arrayData.reverse();
          // console.log(arrayData);
          for(i = 1; i < arrayData.length; i++) {
            dataTable[i] = [];  
            dataTable[i][0] = code_to_name[arrayData[i-1][0].toUpperCase()];
            dataTable[i][1] = Number(arrayData[i-1][1]);
            if(Number(arrayData[i-1][1]) === 0) { 
              new_end = i; 
              break; 
            }
          }

          // console.log(arrayData);
          dataTable = dataTable.slice(0,new_end); 
          // console.log(response);

          // document.getElementById('download_button').style.display = "inline";
          var data = new google.visualization.arrayToDataTable(dataTable);
          // console.log(data);
          var options = {
            backgroundColor: '#f4f4f4'
          };

          var chart = new google.visualization.GeoChart(document.getElementById('chart_div'+div_i));

          chart.draw(data, options);

          // createDataTable(['Country', 'Number of Projects']);
          // insertDataOnTable(dataTable.slice(1));
    }
  });
}

}

/*
    Function to draw popularity chart
*/
function popularityChart(file_name, div_num, country_name, div_i) { 
    // document.getElementById('download_file').action = file_name; 

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawBoxPlot);

    function drawBoxPlot() {
      var arrayStars = [];
      $.ajax({
       type: "GET",  
       url: file_name,
       dataType: "text",       
       success: function(response)  {
          var arrayData = $.csv.toArrays(response);
          var i, starsCol; 
          for(i = 0; i < arrayData[0].length; i++) { 
            if(arrayData[0][i] === 'num_watchers') {
              starsCol = i; 
              break;
            }
          }

          arrayStars[0] = [];
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'x');
          arrayStars[0][0] = arrayData[0][starsCol];
          for(i = 0; i < arrayData.length-1; i++) { 
            arrayStars[0][i+1] = Number(arrayData[i+1][starsCol]);
            // console.log('series' + i);
            data.addColumn('number', 'series' + i); 
          }

          arrayStars = getBoxPlotValues(arrayStars); 

          var data = new google.visualization.DataTable();
          data.addColumn('string', 'x');
          for(i = 0; i < arrayStars[0].length-6; i++) { 
            data.addColumn('number', 'series' + i); 
          }

          data.addColumn({id:'max', type:'number', role:'interval'});
          data.addColumn({id:'min', type:'number', role:'interval'});
          data.addColumn({id:'firstQuartile', type:'number', role:'interval'});
          data.addColumn({id:'median', type:'number', role:'interval'});
          data.addColumn({id:'thirdQuartile', type:'number', role:'interval'});

          data.addRows(arrayStars);

          function getBoxPlotValues(array) {
            // console.log(array[0]);
            for (var i = 0; i < array.length; i++) {
              var arr = array[i].slice(1).sort(function (a, b) {
                return a - b;
              });

              var max = arr[arr.length - 1];
              var min = arr[0];
              var median = getMedian(arr);
              if(arr.length %2 === 0) { 
                var midUpper = arr.length / 2;
                var midLower = midUpper;
              } else { 
                var midLower = Math.floor(arr.length / 2); 
                var midUpper = midLower + 1; 
              }

              // First Quartile is the median from lowest to overall median.
              var firstQuartile = getMedian(arr.slice(0, midUpper));

              // Third Quartile is the median from the overall median to the highest.
              var thirdQuartile = getMedian(arr.slice(midLower));

              var arr_result = []
              arr_result[0] = 'Stars'; 
              var begin = firstQuartile-1.5*(thirdQuartile-firstQuartile);
              var end = thirdQuartile+1.5*(thirdQuartile -firstQuartile); 
              for(var j = 0; j < arr.length; j++){
                if(arr[j] >= begin && arr[j] <= end ){
                  arr_result.push(arr[j]);
                }
              }

              var pos = arr_result.length;
              arr_result[pos] = arr_result[arr_result.length-1];
              pos++;
              arr_result[pos] = arr_result[1];
              pos++;
              arr_result[pos] = firstQuartile;
              pos++;
              arr_result[pos] = median;
              pos++;
              arr_result[pos] = thirdQuartile;

              array[i] = arr_result; 


            }
            // console.log(arr_result);
            return array;
          }

          /*
           * Takes an array and returns
           * the median value.
           */
          function getMedian(array) {
            var length = array.length;

            /* If the array is an even length the
             * median is the average of the two
             * middle-most values. Otherwise the
             * median is the middle-most value.
             */
            if (length % 2 === 0) {
              var midUpper = length / 2;
              var midLower = midUpper - 1;

              return (array[midUpper] + array[midLower]) / 2;
            } else {
              return array[Math.floor(length / 2)];
            }
          }
          var height = div_height*0.8;
          var width = div_width*0.15;
          var options = {
              title: country_name,
              height: height,
              width: width,
              legend: {position: 'none'},
              hAxis: {
                gridlines: {color: '#fff'}
              },
              lineWidth: 0,
              series: [{'color': '#D3362D'}],
              intervals: {
                barWidth: 1,
                boxWidth: 1,
                lineWidth: 2,
                style: 'boxes'
              },
              interval: {
                max: {
                  style: 'bars',
                  fillOpacity: 1,
                  color: '#777'
                },
                min: {
                  style: 'bars',
                  fillOpacity: 1,
                  color: '#777'
                }
              }
          };

          // document.getElementById('download_button').style.display = "inline";
          console.log('div_'+div_num);
          var div = document.getElementById('div_'+div_num);
          div.style.width = "100px";
          div.style.height = "100px";
          div.style.display = "table-cell";
          
          var chart = new google.visualization.LineChart(div);

          chart.draw(data, options);

          // if(div_num === 0) {
          //   createDataTable(arrayData[0]);
          // }

          // insertDataOnTable(arrayData.slice(1));
        }
      });
    }
}

/*
    Function to draw programming language chart 
*/
function programmingLanguagesChart(file_name, div_i) {
    // document.getElementById('download_file').action = file_name;
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var arrayStars = [];
      $.ajax({
       type: "GET",  
       url: file_name,
       dataType: "text",       
       success: function(response)  {
          var arrayData = $.csv.toArrays(response);
          var i, langCol; 
          for(i = 0; i < arrayData[0].length; i++) { 
            if(arrayData[0][i] === 'newLanguage') {
              langCol = i; 
              break;
            }
          }

          var languageQuant = {};
          var lang; 
          var arrayLang = [];

          for(i = 1; i < arrayData.length; i++) {
            lang = arrayData[i][langCol]; 
            if(!languageQuant[lang]) { 
              languageQuant[lang] = 0; 
            } 

            languageQuant[lang]++;
          }

          var keys = Object.keys(languageQuant);
          keys.sort(function(a, b) {
              return languageQuant[b] - languageQuant[a]
          });

          arrayLang[0] = ['Language', 'Number of Projects']; 

          for(i = 0; i < keys.length; i++) { 
            if(i === 10)
              break; 

            arrayLang[i + 1] = []; 
            arrayLang[i + 1][0] = keys[i]; 
            arrayLang[i + 1][1] = languageQuant[keys[i]];
          }

      // console.log();
      var data = google.visualization.arrayToDataTable(arrayLang);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1]);

      var options = {
        title: "Popular Languages",
        backgroundColor: '#f4f4f4',
        // width: 1100,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };

      // document.getElementById('download_button').style.display = "inline";
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'+div_i));
      chart.draw(view, options);
      // createDataTable(arrayData[0]);
      // insertDataOnTable(arrayData.slice(1));
  }
  });
}
}

/*
    TODO: CORE DEVELOPERS INFO
*/
// function coreDevelopersChart() { 
  // google.charts.load("current", {packages:["corechart"]});
  // google.charts.setOnLoadCallback(drawChart);
  // function drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //       ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
  //        'Western', 'Literature', { role: 'annotation' } ],
  //       ['2010', 10, 24, 20, 32, 18, 5, ''],
  //       ['2020', 16, 22, 23, 30, 16, 9, ''],
  //       ['2030', 28, 19, 29, 30, 12, 13, '']
  //     ]);


  //   var view = new google.visualization.DataView(data);

  //   var options = {
  //         isStacked: 'percent',
  //         height: 300,
  //         legend: {position: 'top', maxLines: 3},
  //         hAxis: {
  //           minValue: 0,
  //           ticks: [0, .3, .6, .9, 1]
  //         }
  //       };
  //   var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  //     chart.draw(view, options);
  // }
// }

/*
    Generate option with top 20 contries
*/
function top20CountriesOptions(div_i) {
  $.ajax({
       type: "GET",  
       url: "data/projects_per_country_code.csv",
       dataType: "text",       
       success: function(response)  
       {
          arrayData = $.csv.toArrays(response);
          var i; 

          var dvTable = document.getElementById('top20_countries'+div_i);

          for(i = arrayData.length-2; i > arrayData.length - 22; i--) { 
            var option = document.createElement("option");
            option.value = arrayData[i][0];
            option.text = code_to_name[arrayData[i][0].toUpperCase()];
            dvTable.appendChild(option);
          }
        }
      });
}

/*
    Functions to update chart for different countries (popularity and programming languages)
*/
function updatePopularityChart(div_i){ 
  var countries_code = $('#top20_countries'+div_i).val();
  if(countries_code.length > 6) { 
    alert('Cannot select more than 6 countries.');
  }
  else { 
    // document.getElementById('download_button').style.display = "none";
    // document.getElementById("chart_div"+div_i).innerHTML = "";
    document.getElementById("table_div"+div_i).innerHTML = ""
    var div; 
    for(var i = 0; i < 6; i++) { 
      document.getElementById("div_"+i).innerHTML = "";
      // div = document.createElement('div');
      // div.setAttribute('id', 'div_'+i);
      // document.getElementById("chart_div"+div_i).appendChild(div);
    }
    // console.log(countries_code);
    countries_code.forEach(function(code, i){
      var file_name = 'data/github_data_code_' + code.toLowerCase() + '.csv'; 
      popularityChart(file_name, i, code_to_name[code.toUpperCase()], div_i);
    });
  }
  
}

function updateLanguageChart(div_i){
  var country_code = document.getElementById('top20_countries'+div_i).value;
  var file_name = 'data/github_data_code_' + country_code.toLowerCase() + '.csv';

  programmingLanguagesChart(file_name, div_i);
}

/*
    Functions to handle different data
*/

function projectsData() { 
  var div_i = 1; 
  document.getElementById("main_div"+div_i).innerHTML = "";
  div_height = window.innerHeight - document.getElementById('navbar').clientHeight;
  div_width = window.innerWidth;
  document.getElementById("main_div"+div_i).setAttribute("style",("height:"+div_height+"px"));
  createPageBasics(div_i);
  document.getElementById("page_header"+div_i).style.fontFamily="Courier New";
  document.getElementById("page_header"+div_i).style.textAlign = "center";
  document.getElementById("page_explanation"+div_i).style.marginBottom = 20 + 'px';
  document.getElementById("page_header"+div_i).innerHTML = "Number of Projects per Country";
  document.getElementById('top20_countries'+div_i).style.display = "none";
  // document.getElementById("main_div1").style.display = "none";
  projectsChart(div_i);
}

function popularityData() {
  var div_i = 2;
  document.getElementById("main_div"+div_i).innerHTML = "";
  document.getElementById("main_div"+div_i).setAttribute("style",("height:"+div_height+"px"));
  createPageBasics(div_i);
  document.getElementById("page_header"+div_i).style.fontFamily="Courier New";
  document.getElementById("page_header"+div_i).style.textAlign = "center";
  document.getElementById("page_header"+div_i).style.marginTop = '0px';
  document.getElementById("page_header"+div_i).innerHTML = "Compare Star Variation per Country";
  document.getElementById('top20_countries'+div_i).style.display = "inline";
  document.getElementById('confirm_button'+div_i).style.display = "inline";
  // document.getElementById('download_button').style.display = "none"; 
  document.getElementById('top20_countries'+div_i).multiple = true;
  top20CountriesOptions(div_i); 
  
  document.getElementById('confirm_button'+div_i).onclick = function() { 
    updatePopularityChart(div_i);
  };    

  for(var i = 0; i < 6; i++) { 
    div = document.createElement('div');
    div.setAttribute('id', 'div_'+i);
    div.setAttribute('style', 'overflow:auto')
    document.getElementById("chart_div"+div_i).appendChild(div);
  }

  popularityChart('data/github_data_code_cn.csv', 0, code_to_name['CN']);
}

function languageData() { 
  var div_i = 3;
  document.getElementById("main_div"+div_i).innerHTML = "";
  document.getElementById("main_div"+div_i).setAttribute("style",("height:"+div_height+"px"));
  createPageBasics(div_i);
  document.getElementById("page_header"+div_i).style.fontFamily="Courier New";
  document.getElementById("page_header"+div_i).style.textAlign = "center";
  document.getElementById("page_header"+div_i).style.marginTop = '0px';
  document.getElementById("page_header"+div_i).innerHTML = "Popular Programming Languages per Country";
  document.getElementById('top20_countries'+div_i).style.display = "inline";
  // document.getElementById('download_button').style.display = "none";
  document.getElementById('top20_countries'+div_i).multiple = false;
  top20CountriesOptions(div_i);
  document.getElementById('top20_countries'+div_i).onchange = function() { 
    updateLanguageChart(div_i);
  };    
  programmingLanguagesChart('data/github_data_code_cn.csv', div_i);
}