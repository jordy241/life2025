import React, { useState, useEffect } from 'react'
import type { Character } from '../../types/Character'

interface Props {
  isOpen: boolean
  onClose: () => void
  character: Character
  onUpdate: (money: Character['money']) => void
}

const ATMDialog: React.FC<Props> = ({ isOpen, onClose, character, onUpdate }) => {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setAmount('')
      setError('')
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/^0+(?=\d)/, '') // remove leading 0s
    setAmount(cleaned)
    setError('')
  }

  const handleDeposit = () => {
    const amt = parseInt(amount)
    if (isNaN(amt) || amt <= 0) return

    if (character.money.cash < amt) {
      triggerError("Not enough cash!")
      return
    }

    onUpdate({
      cash: character.money.cash - amt,
      bank: character.money.bank + amt,
      debt: character.money.debt,
    })
    setAmount('')
  }

  const handleWithdraw = () => {
    const amt = parseInt(amount)
    if (isNaN(amt) || amt <= 0) return

    if (character.money.bank < amt) {
      triggerError("Not enough in bank!")
      return
    }

    onUpdate({
      cash: character.money.cash + amt,
      bank: character.money.bank - amt,
      debt: character.money.debt,
    })
    setAmount('')
  }

  const triggerError = (msg: string) => {
    setError(msg)
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2">ATM</h3>

        <div className="text-sm mb-4 space-y-1">
          <p>💵 Cash: ${character.money.cash}</p>
          <p>🏦 Bank: ${character.money.bank}</p>
          {character.money.debt > 0 && (
            <p className="text-red-500">💳 Debt: ${character.money.debt}</p>
          )}
        </div>

        <input
          type="number"
          value={amount}
          onChange={handleChange}
          className={`w-full mb-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 transition-transform ${
            shake ? 'animate-shake border-red-500' : ''
          }`}
          placeholder="Enter amount"
        />

        {error && (
          <p className="text-sm text-red-500 mb-2">{error}</p>
        )}

        <div className="flex justify-between">
          <button
            onClick={handleWithdraw}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Withdraw
          </button>
          <button
            onClick={handleDeposit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ATMDialog
