const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
};

export const useRouter = jest.fn(() => mockRouter);

export const usePathname = jest.fn(() => '/');