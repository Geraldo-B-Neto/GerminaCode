import { useState, useEffect } from 'react';

/**
 * Retorna a hora atual formatada no fuso de Brasília (America/Sao_Paulo) com segundos (HH:mm:ss)
 */
export function getBrasiliaTimeString(includeSeconds = true) {
  const options = {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: includeSeconds ? '2-digit' : undefined,
    hour12: false,
  };
  return new Intl.DateTimeFormat('pt-BR', options).format(new Date());
}

/**
 * Retorna o status operacional da agência baseado no horário comercial de Brasília
 */
export function getAgencyStatus() {
  const now = new Date();
  const brasiliaDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const hour = brasiliaDate.getHours();
  const day = brasiliaDate.getDay();

  // Segunda a Sexta (1 a 5), das 09h às 19h
  const isBusinessHours = day >= 1 && day <= 5 && hour >= 9 && hour < 19;

  return {
    isOpen: isBusinessHours,
    label: isBusinessHours ? 'DISPONÍVEL PARA PROJETOS' : 'RECEBENDO BRIEFINGS',
  };
}

/**
 * Hook React para obter a hora de Brasília atualizada em tempo real (com segundos)
 */
export function useBrasiliaClock(intervalMs = 1000) {
  const [time, setTime] = useState(getBrasiliaTimeString(true));
  const [status, setStatus] = useState(getAgencyStatus());

  useEffect(() => {
    const update = () => {
      setTime(getBrasiliaTimeString(true));
      setStatus(getAgencyStatus());
    };

    update();
    const interval = setInterval(update, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return { time, status, timezone: 'GMT-3' };
}

/**
 * Formata datas padrão pt-BR
 */
export function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}
