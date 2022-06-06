import { Skills } from '../models/interfaces/skills';

describe('Skill Interface', () => {
    it('should be created', () => {
        const skills: Skills = {
            "test": 50,
            "test2": 75
        }
        expect(skills).not.toBe(null);
    });
});