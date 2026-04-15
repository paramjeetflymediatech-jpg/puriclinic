import fs from 'fs/promises';
import path from 'path';

/**
 * Deletes files from the public directory.
 * @param {string|string[]} paths - Single path or array of paths to delete.
 */
export async function deletePhysicalFiles(paths) {
  if (!paths) return;

  const pathArray = Array.isArray(paths) ? paths : [paths];
  const publicDir = path.join(process.cwd(), 'public');

  for (const relativePath of pathArray) {
    if (!relativePath || typeof relativePath !== 'string') continue;

    try {
      // Normalize path: remove leading slash if present, and handle URL formats if necessary
      const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
      
      // Safety check: ensure we are only deleting from within the public directory
      const absolutePath = path.join(publicDir, cleanPath);
      
      if (!absolutePath.startsWith(publicDir)) {
        console.warn(`[FileStorage] Security warning: Attempted to delete file outside public directory: ${absolutePath}`);
        continue;
      }

      // Check if file exists before deleting
      await fs.access(absolutePath);
      await fs.unlink(absolutePath);
      console.log(`[FileStorage] Successfully deleted: ${absolutePath}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`[FileStorage] File not found, skipping: ${relativePath}`);
      } else {
        console.error(`[FileStorage] Failed to delete file ${relativePath}:`, error.message);
      }
    }
  }
}
