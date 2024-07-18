
export const getFormattedElapsedTime = (serverTimestamp: number): string => {
    const now = new Date().getTime();
    const elapsedTimeInMilliseconds = now - serverTimestamp;
  
    if (elapsedTimeInMilliseconds < 60000) { // 1 dakika
      return `${Math.floor(elapsedTimeInMilliseconds / 1000)} saniye önce`;
    } else if (elapsedTimeInMilliseconds < 3600000) { // 1 saat
      return `${Math.floor(elapsedTimeInMilliseconds / 60000)} dakika önce`;
    } else if (elapsedTimeInMilliseconds < 86400000) { // 1 gün
      return `${Math.floor(elapsedTimeInMilliseconds / 3600000)} saat önce`;
    } else {
      const date = new Date(serverTimestamp);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
      return formattedDate;
    }
  }

  