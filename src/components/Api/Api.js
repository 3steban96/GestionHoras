const API = 'http://192.168.0.12:19001';

export const saveData = async (salaryMon, selectedEntryTime,selectedEntryTimeMinutes,selectedExitTime,selectedExitTimeMinutes) => {
  try {
    const res = await fetch(`${API}/saveFile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ salaryMon,selectedEntryTime,selectedEntryTimeMinutes,selectedExitTime,selectedExitTimeMinutes }), 
    });
    return res;
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    throw error;
  }
};
