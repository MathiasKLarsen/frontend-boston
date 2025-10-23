"use client"

import { useState, useEffect } from 'react'
import { getAbout } from '../../../../data/getAbout';

const page = () => {

  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    getAbout().then(setAboutData);
  }, []);

  return (
    <>
      <h2>About</h2>
      
      <article className='flex justify-center'>
        {aboutData && (
          <section className="grid grid-cols-2 h-[500px] w-[800px]">
            <div className='border p-5'>
              <p className="text-2xl text-left">{aboutData.content1}</p>
              <button
                  type="button"
                  className="cursor-pointer bg-blue-400 py-2 px-4 rounded"
                  onClick={() => {
                    setEditProduct(item);
                    setShowModal(true);
                  }}
                >
                  Edit Product
                </button>
            </div>

            <div className='border p-5'>
              <p className="text-2xl text-left">{aboutData.content2}</p>
              <button
                  type="button"
                  className="cursor-pointer bg-blue-400 py-2 px-4 rounded"
                  onClick={() => {
                    setEditProduct(item);
                    setShowModal(true);
                  }}
                >
                  Edit Product
                </button>
            </div>
          </section>
        )}
      </article>
    </>
  )
}

export default page