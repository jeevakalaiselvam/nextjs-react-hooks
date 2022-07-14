import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('INITIAL VALUE');

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  useEffect(() => {
    const getData = async () => {
      new Promise((resolve, reject) => {
        if (true) {
          setTimeout(() => {
            resolve('UPDATED VALUE');
          }, 3000);
        }
      })
        .then((data) => {
          setValue((old) => data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getData();
  }, []);

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => {
          setValue((old) => 'UPDATED VALUE');
        }}
      >
        UPDATE
      </button>
      <h1 class="mt-4 text-secondary">{value}</h1>
    </div>
  );
}
