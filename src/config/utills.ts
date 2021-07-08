import moment from "moment";

const formatDate = (date: number): string => {
  var year = date.toString().substring(0, 4);
  var month = date.toString().substring(4, 6);
  var day = date.toString().substring(6, date.toString().length);
  var theDate = new Date(parseInt(year), parseInt(month), parseInt(day));
  return moment(theDate).format("ll");
};

const converTanggal = (tanggal: any) => {
  var tglReplace = tanggal.replaceAll('-', '');
  return parseInt(tglReplace);
}

export { formatDate, converTanggal };
