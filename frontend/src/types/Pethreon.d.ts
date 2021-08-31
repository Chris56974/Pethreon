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
    "cancelPledge(address)": FunctionFragment;
    "contributorWithdraw(uint256)": FunctionFragment;
    "createPledge(address,uint256,uint256)": FunctionFragment;
    "creatorWithdraw()": FunctionFragment;
    "currentPeriod()": FunctionFragment;
    "deposit()": FunctionFragment;
    "getContributorBalance()": FunctionFragment;
    "getContributorPledges()": FunctionFragment;
    "getCreatorBalance()": FunctionFragment;
    "getCreatorPledges()": FunctionFragment;
    "startOfEpoch()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelPledge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "contributorWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPledge",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getContributorBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContributorPledges",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorPledges",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startOfEpoch",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelPledge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contributorWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPledge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContributorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContributorPledges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorPledges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startOfEpoch",
    data: BytesLike
  ): Result;

  events: {
    "ContributorDeposited(uint256,address,uint256)": EventFragment;
    "ContributorWithdrew(uint256,address,uint256)": EventFragment;
    "CreatorWithdrew(uint256,address,uint256)": EventFragment;
    "PledgeCancelled(uint256,address,address)": EventFragment;
    "PledgeCreated(uint256,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContributorDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContributorWithdrew"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatorWithdrew"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PledgeCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PledgeCreated"): EventFragment;
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
    cancelPledge(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelPledge(address)"(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contributorWithdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "contributorWithdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPledge(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createPledge(address,uint256,uint256)"(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creatorWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "creatorWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentPeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { periodNumber: BigNumber }>;

    "currentPeriod()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { periodNumber: BigNumber }>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getContributorBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getContributorBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getContributorPledges(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[]
      ] & {
        allPledges: ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[];
      }
    >;

    "getContributorPledges()"(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[]
      ] & {
        allPledges: ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[];
      }
    >;

    getCreatorBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getCreatorBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCreatorPledges(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[]
      ] & {
        allPledges: ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[];
      }
    >;

    "getCreatorPledges()"(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[]
      ] & {
        allPledges: ([
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number
        ] & {
          creatorAddress: string;
          contributorAddress: string;
          weiPerPeriod: BigNumber;
          duration: BigNumber;
          dateCreated: BigNumber;
          periodExpires: BigNumber;
          status: number;
        })[];
      }
    >;

    startOfEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startOfEpoch()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cancelPledge(
    _creatorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelPledge(address)"(
    _creatorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contributorWithdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "contributorWithdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPledge(
    _creatorAddress: string,
    _weiPerPeriod: BigNumberish,
    _periods: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createPledge(address,uint256,uint256)"(
    _creatorAddress: string,
    _weiPerPeriod: BigNumberish,
    _periods: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creatorWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "creatorWithdraw()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit()"(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getContributorBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "getContributorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  getContributorPledges(
    overrides?: CallOverrides
  ): Promise<
    ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      creatorAddress: string;
      contributorAddress: string;
      weiPerPeriod: BigNumber;
      duration: BigNumber;
      dateCreated: BigNumber;
      periodExpires: BigNumber;
      status: number;
    })[]
  >;

  "getContributorPledges()"(
    overrides?: CallOverrides
  ): Promise<
    ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      creatorAddress: string;
      contributorAddress: string;
      weiPerPeriod: BigNumber;
      duration: BigNumber;
      dateCreated: BigNumber;
      periodExpires: BigNumber;
      status: number;
    })[]
  >;

  getCreatorBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "getCreatorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCreatorPledges(
    overrides?: CallOverrides
  ): Promise<
    ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      creatorAddress: string;
      contributorAddress: string;
      weiPerPeriod: BigNumber;
      duration: BigNumber;
      dateCreated: BigNumber;
      periodExpires: BigNumber;
      status: number;
    })[]
  >;

  "getCreatorPledges()"(
    overrides?: CallOverrides
  ): Promise<
    ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      creatorAddress: string;
      contributorAddress: string;
      weiPerPeriod: BigNumber;
      duration: BigNumber;
      dateCreated: BigNumber;
      periodExpires: BigNumber;
      status: number;
    })[]
  >;

  startOfEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  "startOfEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cancelPledge(
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelPledge(address)"(
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contributorWithdraw(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "contributorWithdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPledge(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createPledge(address,uint256,uint256)"(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creatorWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    "creatorWithdraw()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    getContributorBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getContributorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getContributorPledges(
      overrides?: CallOverrides
    ): Promise<
      ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        creatorAddress: string;
        contributorAddress: string;
        weiPerPeriod: BigNumber;
        duration: BigNumber;
        dateCreated: BigNumber;
        periodExpires: BigNumber;
        status: number;
      })[]
    >;

    "getContributorPledges()"(
      overrides?: CallOverrides
    ): Promise<
      ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        creatorAddress: string;
        contributorAddress: string;
        weiPerPeriod: BigNumber;
        duration: BigNumber;
        dateCreated: BigNumber;
        periodExpires: BigNumber;
        status: number;
      })[]
    >;

    getCreatorBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreatorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreatorPledges(
      overrides?: CallOverrides
    ): Promise<
      ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        creatorAddress: string;
        contributorAddress: string;
        weiPerPeriod: BigNumber;
        duration: BigNumber;
        dateCreated: BigNumber;
        periodExpires: BigNumber;
        status: number;
      })[]
    >;

    "getCreatorPledges()"(
      overrides?: CallOverrides
    ): Promise<
      ([string, string, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        creatorAddress: string;
        contributorAddress: string;
        weiPerPeriod: BigNumber;
        duration: BigNumber;
        dateCreated: BigNumber;
        periodExpires: BigNumber;
        status: number;
      })[]
    >;

    startOfEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "startOfEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    ContributorDeposited(
      period: null,
      contributor: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; contributor: string; amount: BigNumber }
    >;

    ContributorWithdrew(
      period: null,
      contributor: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; contributor: string; amount: BigNumber }
    >;

    CreatorWithdrew(
      period: null,
      creatorAddress: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { period: BigNumber; creatorAddress: string; amount: BigNumber }
    >;

    PledgeCancelled(
      period: null,
      creatorAddress: null,
      contributor: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { period: BigNumber; creatorAddress: string; contributor: string }
    >;

    PledgeCreated(
      period: null,
      creatorAddress: null,
      contributor: null,
      weiPerPeriod: null,
      periods: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber],
      {
        period: BigNumber;
        creatorAddress: string;
        contributor: string;
        weiPerPeriod: BigNumber;
        periods: BigNumber;
      }
    >;
  };

  estimateGas: {
    cancelPledge(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelPledge(address)"(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contributorWithdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "contributorWithdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPledge(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createPledge(address,uint256,uint256)"(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creatorWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "creatorWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getContributorBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getContributorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getContributorPledges(overrides?: CallOverrides): Promise<BigNumber>;

    "getContributorPledges()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreatorBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreatorBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreatorPledges(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreatorPledges()"(overrides?: CallOverrides): Promise<BigNumber>;

    startOfEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "startOfEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelPledge(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelPledge(address)"(
      _creatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contributorWithdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "contributorWithdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPledge(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createPledge(address,uint256,uint256)"(
      _creatorAddress: string,
      _weiPerPeriod: BigNumberish,
      _periods: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creatorWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "creatorWithdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getContributorBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContributorBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContributorPledges(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getContributorPledges()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreatorBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCreatorBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreatorPledges(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCreatorPledges()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startOfEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startOfEpoch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
