/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PethreonInterface extends ethers.utils.Interface {
  functions: {
    "balanceAsCreator()": FunctionFragment;
    "balanceAsSupporter()": FunctionFragment;
    "cancelPledge(address)": FunctionFragment;
    "createPledge(address,uint256,uint256)": FunctionFragment;
    "deposit()": FunctionFragment;
    "myPledgeTo(address)": FunctionFragment;
    "withdrawAsCreator()": FunctionFragment;
    "withdrawAsSupporter(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceAsCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceAsSupporter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelPledge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createPledge",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(functionFragment: "myPledgeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawAsCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAsSupporter",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "balanceAsCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceAsSupporter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelPledge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPledge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "myPledgeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAsCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAsSupporter",
    data: BytesLike
  ): Result;

  events: {
    "CreatorWithdrew(uint256,address,uint256)": EventFragment;
    "PledgeCancelled(uint256,address,address)": EventFragment;
    "PledgeCreated(uint256,address,address,uint256,uint256)": EventFragment;
    "SupporterDeposited(uint256,address,uint256)": EventFragment;
    "SupporterWithdrew(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatorWithdrew"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PledgeCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PledgeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupporterDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupporterWithdrew"): EventFragment;
}

export class Pethreon extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PethreonInterface;

  functions: {
    balanceAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "balanceAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceAsSupporter(overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceAsSupporter()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    cancelPledge(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelPledge(address)"(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPledge(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createPledge(address,uint256,uint256)"(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    myPledgeTo(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        weiPerPeriod: BigNumber;
        afterLastPeriod: BigNumber;
      }
    >;

    "myPledgeTo(address)"(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        weiPerPeriod: BigNumber;
        afterLastPeriod: BigNumber;
      }
    >;

    withdrawAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAsSupporter(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawAsSupporter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceAsCreator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "balanceAsCreator()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceAsSupporter(overrides?: CallOverrides): Promise<BigNumber>;

  "balanceAsSupporter()"(overrides?: CallOverrides): Promise<BigNumber>;

  cancelPledge(
    _creator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelPledge(address)"(
    _creator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPledge(
    _creator: string,
    _weiPerPeriod: BigNumberish,
    _periods: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createPledge(address,uint256,uint256)"(
    _creator: string,
    _weiPerPeriod: BigNumberish,
    _periods: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit()"(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  myPledgeTo(
    _creator: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      weiPerPeriod: BigNumber;
      afterLastPeriod: BigNumber;
    }
  >;

  "myPledgeTo(address)"(
    _creator: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      weiPerPeriod: BigNumber;
      afterLastPeriod: BigNumber;
    }
  >;

  withdrawAsCreator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawAsCreator()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAsSupporter(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawAsSupporter(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceAsCreator(overrides?: CallOverrides): Promise<BigNumber>;

    "balanceAsCreator()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceAsSupporter(overrides?: CallOverrides): Promise<BigNumber>;

    "balanceAsSupporter()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelPledge(_creator: string, overrides?: CallOverrides): Promise<void>;

    "cancelPledge(address)"(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createPledge(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createPledge(address,uint256,uint256)"(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    myPledgeTo(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        weiPerPeriod: BigNumber;
        afterLastPeriod: BigNumber;
      }
    >;

    "myPledgeTo(address)"(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        weiPerPeriod: BigNumber;
        afterLastPeriod: BigNumber;
      }
    >;

    withdrawAsCreator(overrides?: CallOverrides): Promise<void>;

    "withdrawAsCreator()"(overrides?: CallOverrides): Promise<void>;

    withdrawAsSupporter(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawAsSupporter(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreatorWithdrew(
      period: null,
      creator: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; creator: string; amount: BigNumber }
    >;

    PledgeCancelled(
      period: null,
      creator: null,
      supporter: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { period: BigNumber; creator: string; supporter: string }
    >;

    PledgeCreated(
      period: null,
      creator: null,
      supporter: null,
      weiPerPeriod: null,
      periods: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber],
      {
        period: BigNumber;
        creator: string;
        supporter: string;
        weiPerPeriod: BigNumber;
        periods: BigNumber;
      }
    >;

    SupporterDeposited(
      period: null,
      supporter: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; supporter: string; amount: BigNumber }
    >;

    SupporterWithdrew(
      period: null,
      supporter: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; supporter: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    balanceAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "balanceAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceAsSupporter(overrides?: CallOverrides): Promise<BigNumber>;

    "balanceAsSupporter()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelPledge(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelPledge(address)"(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPledge(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createPledge(address,uint256,uint256)"(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    myPledgeTo(_creator: string, overrides?: CallOverrides): Promise<BigNumber>;

    "myPledgeTo(address)"(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAsSupporter(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawAsSupporter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "balanceAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceAsSupporter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceAsSupporter()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelPledge(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelPledge(address)"(
      _creator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPledge(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createPledge(address,uint256,uint256)"(
      _creator: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    myPledgeTo(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "myPledgeTo(address)"(
      _creator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawAsCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawAsCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAsSupporter(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawAsSupporter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
