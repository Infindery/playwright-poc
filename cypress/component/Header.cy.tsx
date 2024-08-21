import { Header } from "@/components/Header/Header";
import '@/styles/index.scss';

describe('Header.cy.tsx', () => {
  it('HeaderTests', () => {
    cy.mount(<Header />);
		cy.getByData('header').should('be.visible');
  });
});