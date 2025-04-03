import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '@/components/ui/modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();
  const testTitle = 'Test Modal Title';
  const testContent = 'Test Modal Content';

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('should not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose} title={testTitle}>
        {testContent}
      </Modal>
    );

    expect(screen.queryByText(testTitle)).not.toBeInTheDocument();
    expect(screen.queryByText(testContent)).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title={testTitle}>
        {testContent}
      </Modal>
    );

    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('should call onClose when clicking the close button', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title={testTitle}>
        {testContent}
      </Modal>
    );

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when clicking the backdrop', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title={testTitle}>
        {testContent}
      </Modal>
    );

    const backdrop = screen.getByRole('presentation', { hidden: true });
    fireEvent.click(backdrop);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className when provided', () => {
    const customClass = 'custom-modal-class';
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title={testTitle}
        className={customClass}
      >
        {testContent}
      </Modal>
    );

    const modalDialog = screen.getByRole('dialog');
    expect(modalDialog).toHaveClass(customClass);
  });
}); 