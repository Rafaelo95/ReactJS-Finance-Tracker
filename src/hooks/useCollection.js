import { useEffect, useState, useRef } from "react"
import { db } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // https://firebase.google.com/docs/firestore/query-data/queries

  // done to avoid infinite while loop
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = db.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {

      // https://firebase.google.com/docs/firestore/query-data/order-limit-data
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // console.log(results)
      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { documents, error }
}