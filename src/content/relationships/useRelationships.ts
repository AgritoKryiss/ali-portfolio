import { useMemo } from 'react';
import { resolveRelationships } from './registry';
import type { ContentRelationships } from './types';

export function useRelationships(relationships?: ContentRelationships) {
  return useMemo(() => resolveRelationships(relationships), [relationships]);
}
