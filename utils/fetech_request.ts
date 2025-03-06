type FetchData<T> = {
  [K in keyof T]: T[K];
};

interface FetchRequestProps<T> {
  payload: FetchData<T>;
  url: string;
  method: string;
}

export default async function fetchRequest<T>({ url, payload, method }: FetchRequestProps<T>) {
  try {
    const response: Response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
