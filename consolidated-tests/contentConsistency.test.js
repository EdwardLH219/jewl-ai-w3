// Check main heading (h1)
const mainHeading = screen.getByRole('heading', { level: 1 });
expect(mainHeading).toHaveTextContent('Access company jewels instantly');
expect(mainHeading).toHaveClass('font-bold'); 