import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { Pledges } from "./Pledges/Pledges"
import { ActionBar } from "./ActionBar/ActionBar"
import { Balance } from "../../components/Balance/Balance"
import { Loading } from "../../components/Loading/Loading"

import styles from "./contribute.module.css"

import { EthereumWindow } from "../../ethers/utility"

export const ContributePage = () => {
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState("0.00")
  const { ethereum } = window as EthereumWindow
  const history = useHistory()

  useEffect(() => {
    if (typeof ethereum === undefined) history.push("/")
    if (!ethereum.isConnected()) history.push("/")
  }, [ethereum, history])

  return <>
    {loading && <Loading />}
    <div className={styles.contributeLayout}>
      <Balance balance={balance} />
      <ActionBar setBalance={setBalance} setLoading={setLoading} />
      <Pledges />
    </div >
  </>
}