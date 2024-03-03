import smartpy as sp

@sp.module
def main():
    class DockToken(sp.Contract):
        def __init__(self, admin):
            self.data.balances = {sp.address
                                  ('tz1WxrQuZ4CK1MBUa2GqUWK1yJ4J6EtG1Gwi'):500,
                                 sp.address('tz1S2hLyXnimJpp594pMy4To6hU5odD8udoG'):600}
            self.data.tokens = {sp.address
                                  ('tz1WxrQuZ4CK1MBUa2GqUWK1yJ4J6EtG1Gwi'):0,
                                 sp.address('tz1S2hLyXnimJpp594pMy4To6hU5odD8udoG'):0}
            self.data.admin = admin
            self.data.whitelist=set()
            self.data.lockPeriod =  63072000 
            self.data.totalSupply=0
            self.data.maxSupply=20000000
            self.data.mintSchedule = {
                1: 5000000, # 25% pour la première année
                2: 5000000, # 25% pour la deuxième année
            }
            self.data.yearOfLastMint=0
              
                    
        
        @sp.entry_point
        def addToWhitelist(self, params):
            #assert sp.sender == self.data.admin , "Not authorized"
            self.data.whitelist.add(params.address)
            
        @sp.entry_point
        def removeFromWhitelist(self, params):
            #assert sp.sender == self.data.admin, "Not authorized"
            self.data.whitelist.remove(params.address)            

        @sp.private(with_storage="read-write")
        def increase_balance(self, x, amount):
            if self.data.balances.contains(x):
                self.data.balances[x] += amount
            else:
                self.data.balances[x] = amount

        @sp.private(with_storage="read-write")
        def decrease_balance(self, x, amount):
            if self.data.balances.contains(x):
                b = self.data.balances[x] - amount
                assert b >= 0, "Insufficient balance"
                if b ==  0:
                    del self.data.balances[x]
                else:
                    self.data.balances[x] = b
           
        @sp.entry_point
        def transfer(self, params):
            assert self.data.whitelist.contains(params.dest), "Address not whitelisted"
            assert sp.now - params.timestamp <= self.data.lockPeriod, "Tokens are locked"
            if self.data.balances.contains(params.sender):
                b = self.data.balances[params.sender] - params.amount
                assert b >= 0, "Insufficient balance"
                self.decrease_balance(sp.record(x=params.sender, amount=params.amount))
                self.increase_balance(sp.record(x=params.dest, amount=params.amount))


        @sp.entry_point
        def mintYearly(self, year):
            amountToMint=0
            assert year >= 1, "Invalid year for minting"
            assert self.data.yearOfLastMint < year, "Invalid year for minting"
            if year <= 2:
                amountToMint = self.data.mintSchedule[year]
            else:
                amountToMint = 300000  # 3% of 10 million tokens for the following years
            assert self.data.totalSupply + amountToMint <= self.data.maxSupply, "Minting exceeds max supply"
            self.data.totalSupply += amountToMint
            if self.data.balances.contains(self.data.admin):
                self.data.balances[self.data.admin] += amountToMint
            else:
                self.data.balances[self.data.admin] = amountToMint
            self.data.yearOfLastMint = year


        @sp.entry_point
        def buy(self, params):
            assert self.data.whitelist.contains(params.dest), "Address not whitelisted"
            assert params.amount > 0, "Invalid amount"
        
            # Check if recipient address exists in balances map
            if self.data.balances.contains(params.dest):
                b = self.data.balances[params.dest]
                assert b >= params.amount, "Insufficient balance"
                # Deduct the amount from the recipient's balance
                self.data.balances[params.dest] -= params.amount
                self.data.tokens[params.dest] += params.amount


    # Other logic for token purchase (e.g., minting, transfer, etc.)
    # ...

                    #self.increase_balance(sp.record(x=params.dest, amount=params.amount))


@sp.add_test()
def test():    
    admin = sp.test_account("Admin").address
    alice = sp.test_account("Alice").address
    User1 = sp.test_account("User1").address
    User2 = sp.test_account("User2").address
    s = sp.test_scenario("DockToken test: Add/Remove Whitelist",main)
    c = main.DockToken(admin)

    #1-Check add and remove customers from the whitelist
    # Add Alice to whitelist
    s += c
    c.addToWhitelist(address=alice)
    # Verify Alice is in the whitelist
    # c.removeFromWhitelist(address=alice)
    #2-transfer
    c.addToWhitelist(address=User1)
    # Verify Alice is in the whitelist
    c.addToWhitelist(address=User2)

    c.mintYearly(1)

    c.buy(dest=alice, amount=34)
    c.transfer(dest=User1, amount=100, sender=User2,timestamp=sp.timestamp_from_utc(2022, 1, 1, 0, 0, 0))




    




    

    
    

    

    

    
    

    
