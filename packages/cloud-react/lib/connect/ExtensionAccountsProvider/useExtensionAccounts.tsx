// Copyright 2023 @polkadot-cloud/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useContext } from "react";
import { ExtensionAccountsContext } from ".";

export const useExtensionAccounts = () => useContext(ExtensionAccountsContext);
