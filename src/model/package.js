const { toLocaleTime, toLocaleDate } = require("../helpers/date");

const package = (event) => {
  const local = event.event_locality || event.iata_code;
  const origem = local == "SAO" ? "Brasil" : local;
  const data = toLocaleDate(event.entry_date_db_str);
  const hora = toLocaleTime(event.entry_date_db_str);
  const status = event.track_description;
  const documento = event.trck_nmr_fol;
  return { origem, data, hora, status, documento };
};

module.exports = { package };
