import React from 'react';
import { TouchableOpacity } from 'react-native';

import { FavoriteIcon } from '../icons/favorite';
import { NotFavoriteIcon } from '../icons/not-favorite';

export type FavoriteButtonProps = {
  onToggleFavorite: () => void;
  isFavorite: boolean;
};

export function FavoriteButton({ isFavorite, onToggleFavorite }: FavoriteButtonProps) {
  return (
    <TouchableOpacity onPress={onToggleFavorite}>
      {isFavorite ? <FavoriteIcon /> : <NotFavoriteIcon />}
    </TouchableOpacity>
  );
}
