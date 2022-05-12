import moment from 'moment';

const setFormatter = (value: number | string, type?: string) => {
  if (!value) {
    return '-';
  } else if (!type) {
    return moment(value).format("YYYY-MM-DD HH:mm:ss");
  } else {
    return moment(value).format(type);
  }
}

export default {
  setFormatter
}