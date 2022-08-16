import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full sm:flex-row flex-col`}>
      {clients.map((client, index) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} cursor-pointer sm:min-w-[142px] min-w-[120px] mb-5`}>
          <img src={client.logo} alt="Client" className="sm:w-[192px] w-[100%] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients