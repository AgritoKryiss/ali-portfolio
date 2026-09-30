/**
 * Backwards-compatible re-export.
 * Legacy modules importing from '../content/projects' will continue to work.
 *
 * New code should import from './projects/index' or individual category files.
 */
export { projects, type Project, type ProjectCategory } from './projects/index';
