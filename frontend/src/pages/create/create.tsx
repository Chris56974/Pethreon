import { useState, useEffect, FormEvent } from "react"
import { useHistory } from "react-router"
import { ActionButton } from "../../components/ActionButton/ActionButton"
import { EthereumWindow, PledgeType } from "../../ethers/utility"
import { Loading } from "../../components/Loading/Loading"
import { Balance } from "../../components/Balance/Balance"
import { Pledge } from "../../components/Pledge/Pledge"
import styles from "./create.module.css"

import { creatorWithdraw } from "../../ethers/creatorWithdraw"
import { getCreatorBalance } from "../../ethers/getCreatorBalance"
import { getCreatorPledges } from "../../ethers/getCreatorPledges"
import { MetamaskError } from "../../ethers/utility"

import { ReactComponent as WithdrawSVG } from "../../assets/withdraw.svg"
import { ReactComponent as CsvSVG } from "../../assets/csv.svg"

export const CreatePage = () => {
  const { ethereum } = window as EthereumWindow
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState("0.0")
  const [pledges, setPledges] = useState<PledgeType[]>([])
  const history = useHistory()

  useEffect(() => {
    if (typeof ethereum === undefined) history.push("/")
    if (!ethereum.isConnected()) history.push("/")
  }, [ethereum, history])

  useEffect(() => {
    async function init() {
      if (window.location.pathname === "/") return
      try {
        let balance = await getCreatorBalance()
        let pledges = await getCreatorPledges()
        setBalance(balance)
        setPledges(pledges)
      } catch (error) {
        window.alert(`${error}`)
        history.push("/")
      }
    }
    init()
  }, [history])

  const withdrawBalance = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      await creatorWithdraw()
      const newBalance = await getCreatorBalance()
      setBalance(newBalance)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      window.alert(`Error: ${(error as MetamaskError).message}`)
    }
  }

  return <>
    {loading && <Loading />}
    <div className={styles.createLayout}>
      <Balance balance={balance} />
      <div className={styles.actionBar}>
        <ActionButton onClick={withdrawBalance}>Withdraw <WithdrawSVG /></ActionButton>
        <ActionButton>Extract to CSV <CsvSVG /></ActionButton>
      </div>
      <ul className={styles.transactionHistory}>
        {pledges.map((pledge: PledgeType) => <Pledge pledge={pledge} key={pledge.creatorAddress} />)}
      </ul>
    </div>
  </>
}