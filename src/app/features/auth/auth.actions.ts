import { createAction, props } from '@ngrx/store';

export const changeMode = createAction(
  '[Side Bar] Change Mode',
  props<{ mode: string }>()
);
