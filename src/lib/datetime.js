// import { format } from 'date-fns';

/**
 * formatDate
 */

export function formatDate(date = 'PPP') {
  return new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
