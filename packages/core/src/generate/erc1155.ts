import type { ERC1155Options } from '../erc1155';
import { accessOptions } from '../set-access-control';
import { upgradeableOptions } from '../set-upgradeable';
import { generateAlternatives } from './alternatives';

const booleans = [true, false];

const blueprint = {
  name: ['MyToken'],
  uri: ['https://example.com/'],
  burnable: booleans,
  pausable: booleans,
  mintable: booleans,
  access: accessOptions,
  upgradeable: upgradeableOptions,
};

export function* generateERC1155Options(): Generator<Required<ERC1155Options>> {
  yield* generateAlternatives(blueprint);
}
